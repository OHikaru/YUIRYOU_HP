"use client";

import { FormEvent, useEffect, useState } from "react";

const hiddenKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "referrer", "landing_page"] as const;

type HiddenFieldState = Record<(typeof hiddenKeys)[number], string>;

export function ContactForm() {
  const [hiddenValues, setHiddenValues] = useState<HiddenFieldState>({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    referrer: "",
    landing_page: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setHiddenValues({
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      referrer: document.referrer ?? "",
      landing_page: window.location.pathname,
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      event.preventDefault();
    }
  };

  return (
    <form className="contact-form" action="/thanks" method="get" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label><span>会社名</span><input name="company" type="text" required /></label>
        <label><span>お名前</span><input name="name" type="text" required /></label>
        <label><span>メールアドレス</span><input name="email" type="email" required /></label>
        <label><span>電話番号</span><input name="phone" type="tel" /></label>
        <label><span>役職</span><input name="title" type="text" /></label>
        <label><span>会社URL</span><input name="company_url" type="url" placeholder="https://" /></label>
        <label><span>業種</span><input name="industry" type="text" required /></label>
        <label>
          <span>相談したい内容</span>
          <select name="topic" required defaultValue="">
            <option value="" disabled>選択してください</option>
            <option value="advisory">医療・科学アドバイザリー</option>
            <option value="research">臨床研究・RCT・論文化支援</option>
            <option value="ai-global">医療AI・英語 / 海外向け支援</option>
            <option value="media">YouTube・広告・オウンドメディア支援</option>
            <option value="diagnostic">診断パック</option>
            <option value="other">その他</option>
          </select>
        </label>
      </div>
      <label>
        <span>現在の課題</span>
        <textarea name="challenge" rows={5} required />
      </label>
      <div className="form-grid">
        <label><span>想定時期</span><input name="timing" type="text" placeholder="例: 1か月以内 / 2026年Q2" /></label>
        <label>
          <span>想定予算</span>
          <select name="budget" defaultValue="">
            <option value="" disabled>選択してください</option>
            <option value="under-300">30万円未満</option>
            <option value="300-600">30〜60万円</option>
            <option value="600-1000">60〜100万円</option>
            <option value="1000-1800">100〜180万円</option>
            <option value="over-1800">180万円以上</option>
          </select>
        </label>
      </div>
      {hiddenKeys.map((key) => (
        <input key={key} type="hidden" name={key} value={hiddenValues[key]} readOnly />
      ))}
      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>個人情報保護方針に同意する</span>
      </label>
      <button type="submit" className="button button--solid button--full">無料相談を申し込む</button>
    </form>
  );
}
