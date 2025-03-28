export const TourCardMetaData = ({
  code,
  period,
  // type,
  universityId,
}: {
  code: string;
  period: string;
  universityId: string;
  // type: string;
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 divide-x divide-border border-b pb-2 text-xs">
      <MetadataItem label="จำนวนวัน">
        <span className="font-medium">{period}</span>
      </MetadataItem>

      <MetadataItem label="มหา'ลัย">
        <span className="text-center font-medium text-primary">{universityId === "1" ? "HIT" : "HRBNU"}</span>
      </MetadataItem>

      <MetadataItem label="รหัสทัวร์">
        <span className="font-medium text-primary">{code}</span>
      </MetadataItem>
    </div>
  );
};

const MetadataItem = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-px py-2">
      <div className="text-muted-foreground">{label}</div>
      {children}
    </div>
  );
};
