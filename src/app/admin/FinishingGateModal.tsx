"use client";

import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  open: boolean;
  missingAfterPhotos: boolean;
  missingPayment: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function FinishingGateModal({
  open,
  missingAfterPhotos,
  missingPayment,
  onConfirm,
  onCancel,
}: Props) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 w-full max-w-sm shadow-xl"
          style={{ borderRadius: "3px" }}
        >
          <Dialog.Title
            className="font-serif text-xl text-[#2A2421] mb-1"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontWeight: 400,
            }}
          >
            Mark as Fully Complete?
          </Dialog.Title>
          <Dialog.Description className="text-sm font-sans text-[#6B5E55] mb-4">
            The following items are still unchecked:
          </Dialog.Description>
          <ul className="mb-6 space-y-2">
            {missingAfterPhotos && (
              <li className="text-sm font-sans text-[#A65D37] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D37] shrink-0" />
                After-photos not uploaded
              </li>
            )}
            {missingPayment && (
              <li className="text-sm font-sans text-[#A65D37] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D37] shrink-0" />
                Final payment not confirmed
              </li>
            )}
          </ul>
          <div className="flex gap-3">
            <button
              onClick={onConfirm}
              className="flex-1 py-2.5 bg-[#2A7A2A] text-white text-xs font-sans font-semibold uppercase tracking-widest hover:bg-[#236023] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Mark Complete Anyway
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-2.5 border border-[rgba(42,36,33,0.2)] text-xs font-sans font-semibold uppercase tracking-widest text-[#6B5E55] hover:border-[#2A2421] transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Go Back
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
