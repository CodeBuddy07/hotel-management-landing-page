"use client";

export default function PropertyPolicies() {
  return (
    <section className="p-6 container mx-auto">
      <h2 className="text-lg font-semibold mb-4">Policies</h2>
      <div className="border rounded-xl overflow-hidden text-sm bg-white shadow-sm">

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Check-in</span>
          <div>
            <p className="font-medium">Available 24 hours</p>
            <p className="text-muted-foreground">
              Guests are required to show a photo ID and credit card upon check-in. <br />
              You&apos;ll need to let the property know in advance what time you&apos;ll arrive.
            </p>
          </div>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Check-out</span>
          <p className="font-medium">Available 24 hours</p>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Cancellation/ prepayment</span>
          <p className="text-muted-foreground">
            Cancellation and prepayment policies vary according to accommodation type. <br />
            Please check what <a href="#" className="underline text-primary">conditions</a> may apply to each option when making your selection.
          </p>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Children and beds</span>
          <div className="text-muted-foreground space-y-2">
            <div>
              <p className="font-medium text-foreground">Child policies</p>
              <p>Children of any age are welcome.<br />
                Children 12 years and above will be charged as adults at this property.</p>
              <p>To see correct prices and occupancy info, please add the number of children in your group and their ages to your search.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Cot and extra bed policies</p>
              <p>The number of extra beds allowed depends on the option you choose.<br />
                Please check your selected option for more information.</p>
              <p>There are no cots available at this property.<br />
                All extra beds are subject to availability.</p>
            </div>
          </div>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">No age restriction</span>
          <p className="text-muted-foreground">There is no age requirement for check-in</p>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Pets</span>
          <p className="text-muted-foreground">Pets are not allowed.</p>
        </div>

        <hr className="w-[98%] mx-auto" />

        
        <div className="grid md:grid-cols-[180px_1fr] gap-4 p-4">
          <span className="font-medium">Cash only</span>
          <p className="text-muted-foreground">This property only accepts cash payments.</p>
        </div>
      </div>
    </section>
  );
}
