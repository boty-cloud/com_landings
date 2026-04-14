import { adminDb } from "./firebase-admin";
import { Proposal } from "@/types/proposal";

export async function getProposal(id: string): Promise<Proposal | null> {
  const doc = await adminDb.collection("proposals").doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Proposal;
}
