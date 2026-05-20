"use client";

import { FormEvent, useState } from "react";

const whatsappBaseUrl = "https://wa.me/6285655558573";

const needOptions = [
  "Neon Box",
  "Letter Timbul",
  "Rak Kulkas Akrilik",
  "Display Akrilik",
  "Signage / Papan Nama",
  "Custom Akrilik Lainnya"
] as const;

type FormValues = {
  name: string;
  phone: string;
  need: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  need: "",
  message: ""
};

function buildWhatsAppMessage(values: FormValues) {
  return [
    "Halo PT Akira Prima Karya,",
    "Saya ingin konsultasi proyek.",
    "",
    `Nama: ${values.name}`,
    `Nomor WhatsApp: ${values.phone}`,
    `Jenis Kebutuhan: ${values.need}`,
    `Detail Proyek: ${values.message}`
  ].join("\n");
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  function validateForm(currentValues: FormValues) {
    const nextErrors: FormErrors = {};

    if (!currentValues.name.trim()) {
      nextErrors.name = "Nama wajib diisi.";
    }

    if (!currentValues.phone.trim()) {
      nextErrors.phone = "Nomor WhatsApp wajib diisi.";
    }

    if (!currentValues.need.trim()) {
      nextErrors.need = "Jenis kebutuhan wajib dipilih.";
    }

    if (!currentValues.message.trim()) {
      nextErrors.message = "Pesan / detail proyek wajib diisi.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const encodedMessage = encodeURIComponent(buildWhatsAppMessage(values));
    window.open(`${whatsappBaseUrl}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));

    if (errors[field]) {
      setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    }
  }

  const inputClassName =
    "w-full rounded-[20px] border bg-[var(--color-white-smoke)] px-4 py-3.5 text-sm text-[var(--color-midnight-ink)] outline-none transition placeholder:text-[var(--color-pewter-gray)] focus:border-[var(--color-royal-blue)] focus:bg-white";

  const errorClassName = "border-red-300 focus:border-red-500";
  const normalClassName = "border-black/5";

  return (
    <div className="interactive-card rounded-[28px] border border-black/5 bg-white p-5 shadow-[var(--shadow-xl)] sm:p-7">
      <h3 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-midnight-ink)]">Ruang brief kebutuhan proyek</h3>
      <p className="mt-4 text-sm leading-6 text-[var(--color-pewter-gray)] sm:leading-7">
        Sampaikan kebutuhan signage, display akrilik, atau fabrication custom Anda. Tim PT Akira Prima Karya akan menerima
        brief awal melalui WhatsApp untuk membantu proses konsultasi dengan lebih cepat.
      </p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[var(--color-midnight-ink)]">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Nama lengkap Anda"
              className={`${inputClassName} ${errors.name ? errorClassName : normalClassName}`}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[var(--color-midnight-ink)]">
              Nomor WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="08xxxxxxxxxx"
              className={`${inputClassName} ${errors.phone ? errorClassName : normalClassName}`}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-2 text-sm text-red-600">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="need" className="mb-2 block text-sm font-semibold text-[var(--color-midnight-ink)]">
            Jenis kebutuhan
          </label>
          <select
            id="need"
            name="need"
            value={values.need}
            onChange={(event) => updateField("need", event.target.value)}
            className={`${inputClassName} appearance-none ${errors.need ? errorClassName : normalClassName}`}
            aria-invalid={Boolean(errors.need)}
            aria-describedby={errors.need ? "need-error" : undefined}
          >
            <option value="">Pilih jenis kebutuhan proyek</option>
            {needOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.need ? (
            <p id="need-error" className="mt-2 text-sm text-red-600">
              {errors.need}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--color-midnight-ink)]">
            Pesan / detail proyek
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Jelaskan kebutuhan ukuran, lokasi pemasangan, jumlah, atau target waktu pengerjaan."
            rows={5}
            className={`${inputClassName} min-h-[144px] resize-y ${errors.message ? errorClassName : normalClassName}`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className="interactive-button inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#1faa59]/12 bg-[#1faa59] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(31,170,89,0.2)] transition hover:bg-[#16924a] sm:w-fit"
        >
          Kirim via WhatsApp
        </button>
      </form>
    </div>
  );
}
