import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { contactEmail } from "@/content/event";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refunds, pass transfers, cancellations and pricing errors for OC Bachata events and passes.",
  alternates: { canonical: "/refund-policy" },
};

const email = <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" updated="October 29, 2026">
      <h2>Refunds and Exchanges</h2>
      <p>
        <strong>All sales are FINAL. No refunds will be issued.</strong> Before purchasing Passes or enrolling in any
        course, carefully review your selection, price and dates of the Event. In addition, we may occasionally offer
        Passes or Courses at a discount after the original on-sale date and will not refund the difference between the
        original price and the sale price. You agree that you will not attempt to evade, avoid, or circumvent any refund
        prohibitions in any manner with regard to Passes or Course(s) you purchased. Without limiting the generality of
        the foregoing, you will not dispute or otherwise seek a “chargeback” from the company whose credit card you used
        to purchase Passes or Courses. Should you do so, your Passes or Courses may be cancelled, and we may, in our sole
        discretion, refuse to honor pending and future Pass/course purchases made from all credit card accounts or
        online accounts on which such chargebacks have been made, and may prohibit all persons in whose name the credit
        card accounts exist and any person who accesses any associated online account or credit card or who otherwise
        breaches this provision from using our website or purchasing a Pass to this or any other Event we sponsor.
      </p>

      <h2>Pass/Course Transfer</h2>
      <p>
        You may, however, transfer your Pass/Course to another person. Please contact the organizer to transfer the name
        of the pass/course to the purchaser.
      </p>
      <p>Pass/course transfers are free until 3 days before the event.</p>

      <h2>Cancelled and Postponed Events/Series Training</h2>
      <p>
        If our Event/Course is postponed due to a COVID-19 pandemic restriction, all Passes for the event will
        automatically be transferred to the next event.
      </p>
      <p>
        If our Event/Course is cancelled you will receive an e-mail from {email}. We will either issue a transfer to the
        next Event or attempt to issue you a refund, unless your Pass is subsequently transferred to another person.
      </p>
      <p>
        If the Event/Course is moved or rescheduled, we reserve the right to set refund limitations. Please contact us at{" "}
        {email} for more information or to request a refund if you cannot attend the rescheduled Event. Please make sure
        to include/provide your Invoice number so we can expedite your refund, if applicable.
      </p>
      <p>
        If we issue you a refund for a Pass, we will issue a refund of the Pass at face value paid (or, if a discounted
        Pass, then instead the discounted Pass price paid), all service fees and any convenience charges will not be
        refunded. Also, if a refund is issued, it will be issued using the same method of payment that was used to
        purchase the Pass/Course. If a credit card was used to make the refunded purchase, then only that actual credit
        card will receive the credit for the refund. OC Bachata will not be liable for travel or any other expenses that
        you or anyone else incurs in connection with a cancelled or postponed Event.
      </p>

      <h2>Pricing and Other Errors</h2>
      <p>
        If the amount you pay for a Pass/Course is incorrect, regardless of whether due to an error in a price posted on
        our website or otherwise communicated to you, or you are able to order a Pass/Course before its scheduled on-sale
        or pre-sale date, or you are able to order a Pass/Course that was not supposed to have been released for sale,
        then OC Bachata will have the right to cancel that Pass/Course (or the order for that Pass/Course) and refund to
        you the amount that you paid. This will apply regardless of whether because of human error, or a transactional
        malfunction of our website, or other operated system.
      </p>

      <h2>License; Ejection and Cancellation; No Redemption Value</h2>
      <p>
        The Event Providers reserve the right, without refund of any amount paid, to refuse admission to, or eject, any
        person whose conduct management deems disorderly, who uses vulgar or abusive language or who fails to comply
        with Event Provider rules. Breach of terms or rules will terminate your license to attend the Event/Course
        without refund. Any Event/Course Pass is a revocable license and admissions may be refused.
      </p>
    </LegalPage>
  );
}
