import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 60,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#2A2421",
  },
  header: {
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#2A2421",
    paddingBottom: 12,
  },
  businessName: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  businessSub: {
    fontSize: 10,
    color: "#6B5E55",
  },
  clientName: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    marginTop: 12,
    marginBottom: 2,
  },
  clientDetail: {
    fontSize: 10,
    color: "#6B5E55",
    marginBottom: 1,
  },
  metaRow: {
    flexDirection: "row",
    gap: 24,
    marginTop: 8,
  },
  metaCell: {
    marginRight: 24,
  },
  metaLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    color: "#9e9087",
    marginBottom: 2,
  },
  metaValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#2A2421",
  },
  block: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E0DB",
  },
  blockTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    marginBottom: 4,
    color: "#2A2421",
  },
  blockBody: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#2A2421",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    borderTopWidth: 1,
    borderTopColor: "#E5E0DB",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 8,
    color: "#9e9087",
  },
});

interface Block {
  title: string;
  body: string;
}

export interface BidDocumentProps {
  clientName: string;
  address: string | null;
  phone: string;
  startDate: string | null;
  bidAmount: number | null;
  blocks: Block[];
}

export function BidDocument({
  clientName,
  address,
  phone,
  startDate,
  bidAmount,
  blocks,
}: BidDocumentProps) {
  const formattedAmount = bidAmount
    ? `$${bidAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}`
    : "TBD";

  const formattedDate = startDate
    ? new Date(startDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "TBD";

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.businessName}>Sue Wheeler Wood Refinishing</Text>
          <Text style={styles.businessSub}>St. Louis · Since 1989</Text>
          <Text style={styles.clientName}>{clientName}</Text>
          {address ? <Text style={styles.clientDetail}>{address}</Text> : null}
          {phone ? <Text style={styles.clientDetail}>{phone}</Text> : null}
          <View style={styles.metaRow}>
            <View style={styles.metaCell}>
              <Text style={styles.metaLabel}>Start Date</Text>
              <Text style={styles.metaValue}>{formattedDate}</Text>
            </View>
            <View style={styles.metaCell}>
              <Text style={styles.metaLabel}>Estimate Total</Text>
              <Text style={styles.metaValue}>{formattedAmount}</Text>
            </View>
          </View>
        </View>

        {/* Blocks */}
        {blocks.map((block, i) => (
          <View key={i} style={styles.block}>
            <Text style={styles.blockTitle}>{block.title}</Text>
            <Text style={styles.blockBody}>{block.body}</Text>
          </View>
        ))}

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>Sue Wheeler Wood Refinishing</Text>
          <Text style={styles.footerText}>(314) 367-6054</Text>
          <Text style={styles.footerText}>suewheelerstl.com</Text>
        </View>
      </Page>
    </Document>
  );
}
