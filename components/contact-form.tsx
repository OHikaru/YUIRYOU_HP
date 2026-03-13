"use client";

import { FormEvent, useEffect, useState } from "react";

import { contactFormCopy } from "@/content/page-copy";
import type { SiteLocale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";

const hiddenKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "referrer", "landing_page"] as const;

type HiddenFieldState = Record<(typeof hiddenKeys)[number], string>;

export function ContactForm({ locale = "ja" }: { locale?: SiteLocale }) {
  const copy = contactFormCopy[locale];
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
    <form className="contact-form" action={withLocale("/thanks", locale)} method="get" onSubmit={handleSubmit}>
      <div className="contact-form__intro">
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>{copy.labels.company}</span>
          <input name="company" type="text" required />
        </label>
        <label className="form-field">
          <span>{copy.labels.name}</span>
          <input name="name" type="text" required />
        </label>
        <label className="form-field">
          <span>{copy.labels.email}</span>
          <input name="email" type="email" required />
        </label>
        <label className="form-field">
          <span>
            {copy.labels.phone}
            <small>{copy.optionalLabel}</small>
          </span>
          <input name="phone" type="tel" placeholder={copy.placeholders.phone} />
        </label>
        <label className="form-field">
          <span>
            {copy.labels.title}
            <small>{copy.optionalLabel}</small>
          </span>
          <input name="title" type="text" />
        </label>
        <label className="form-field">
          <span>
            {copy.labels.company_url}
            <small>{copy.optionalLabel}</small>
          </span>
          <input name="company_url" type="url" placeholder={copy.placeholders.company_url} />
        </label>
        <label className="form-field form-field--wide">
          <span>{copy.labels.industry}</span>
          <input name="industry" type="text" required />
        </label>
      </div>

      <fieldset className="choice-fieldset">
        <legend>{copy.focusLegend}</legend>
        <div className="choice-grid choice-grid--large">
          {copy.focusOptions.map((option) => (
            <label key={option.value} className="choice-card">
              <input name="topic" type="radio" value={option.value} required />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="choice-fieldset">
        <legend>
          {copy.stageLegend}
          <small>{copy.optionalLabel}</small>
        </legend>
        <div className="choice-grid">
          {copy.stageOptions.map((option) => (
            <label key={option.value} className="choice-card choice-card--compact">
              <input name="stage" type="radio" value={option.value} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="form-field">
        <span>{copy.challengeLabel}</span>
        <textarea name="challenge" rows={6} required placeholder={copy.challengePlaceholder} />
      </label>

      <fieldset className="choice-fieldset choice-fieldset--split">
        <div>
          <legend>{copy.timingLegend}</legend>
          <div className="choice-grid">
            {copy.timingOptions.map((option) => (
              <label key={option.value} className="choice-card choice-card--compact">
                <input name="timing" type="radio" value={option.value} required />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <legend>
            {copy.budgetLegend}
            <small>{copy.optionalLabel}</small>
          </legend>
          <div className="choice-grid">
            {copy.budgetOptions.map((option) => (
              <label key={option.value} className="choice-card choice-card--compact">
                <input name="budget" type="radio" value={option.value} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      {hiddenKeys.map((key) => (
        <input key={key} type="hidden" name={key} value={hiddenValues[key]} readOnly />
      ))}

      <label className="consent-check">
        <input name="consent" type="checkbox" required />
        <span>{copy.consentLabel}</span>
      </label>
      <button type="submit" className="button button--solid button--full">{copy.submitLabel}</button>
    </form>
  );
}
