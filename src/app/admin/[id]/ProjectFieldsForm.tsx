"use client";

import { useState } from "react";

interface Props {
  submissionId: string;
  initialStartDate: string | null;
  initialAfterPhotos: boolean;
  initialFinalPayment: boolean;
}

export function ProjectFieldsForm({
  submissionId,
  initialStartDate,
  initialAfterPhotos,
  initialFinalPayment,
}: Props) {
  const [startDate, setStartDate] = useState(initialStartDate || "");
  const [afterPhotos, setAfterPhotos] = useState(initialAfterPhotos);
  const [finalPayment, setFinalPayment] = useState(initialFinalPayment);
  const [saving, setSaving] = useState(false);

  async function save(payload: Record<string, unknown>) {
    setSaving(true);
    try {
      await fetch(`/api/admin/submissions/${submissionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } finally {
      setSaving(false);
    }
  }

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartDate(value);
    save({ bid_start_date: value || null });
  };

  const handleAfterPhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setAfterPhotos(value);
    save({ after_photos_uploaded: value });
  };

  const handleFinalPaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setFinalPayment(value);
    save({ final_payment_confirmed: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] mb-2 block">
          Bid Start Date
        </label>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          disabled={saving}
          className="px-3 py-2 text-sm font-sans text-[#2A2421] bg-white border w-full"
          style={{ borderRadius: "2px", borderColor: "rgba(42,36,33,0.15)" }}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="afterPhotos"
          checked={afterPhotos}
          onChange={handleAfterPhotosChange}
          disabled={saving}
          className="w-4 h-4"
          style={{ accentColor: "#11B2E8" }}
        />
        <label
          htmlFor="afterPhotos"
          className="text-sm font-sans text-[#2A2421] cursor-pointer"
        >
          After-photos uploaded
        </label>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="finalPayment"
          checked={finalPayment}
          onChange={handleFinalPaymentChange}
          disabled={saving}
          className="w-4 h-4"
          style={{ accentColor: "#11B2E8" }}
        />
        <label
          htmlFor="finalPayment"
          className="text-sm font-sans text-[#2A2421] cursor-pointer"
        >
          Final payment confirmed
        </label>
      </div>
    </div>
  );
}
