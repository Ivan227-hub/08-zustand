"use client";

interface ModalProps {
  children: React.ReactNode;
}

export default function DefaultModal({ children }: ModalProps) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">{children}</div>
    </div>
  );
}
