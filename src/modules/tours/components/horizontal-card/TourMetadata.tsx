export function TourMetadata({
  code,
  period,
  // type,
  universityId,
}: {
  code: string;
  period: string;
  universityId: string;
  // type: string;
}) {
  return (
    <div className="mb-4 grid grid-cols-3 gap-4 divide-x divide-border text-sm">
      <MetadataItem label="จำนวนวัน">
        <span className="text-lg font-medium">{period}</span>
      </MetadataItem>

      <MetadataItem label="มหา'ลัย">
        <span className="text-lg font-medium text-primary">{universityId === "1" ? "HIT" : "HRBNU"}</span>
      </MetadataItem>

      <MetadataItem label="รหัสทัวร์">
        <span className="text-lg font-medium text-primary">{code}</span>
      </MetadataItem>
    </div>
  );
}

function MetadataItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-px py-2">
      <div className="text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}
