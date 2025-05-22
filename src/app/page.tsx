import { AvailabilityForm } from "./_Components/AvailabilityForm";
import Features from "./_Components/Features";
import Header from "./_Components/Header";
import PropertyDetails from "./_Components/PropertyDetails";
import PropertyPolicies from "./_Components/PropertyPolicies";
import RoomSelector from "./_Components/RoomSelector";
import TestimonialsSlider from "./_Components/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <Header/>
      <Features/>
      <AvailabilityForm/>
      <RoomSelector/>
      <PropertyDetails/>
      <TestimonialsSlider/>
      <PropertyPolicies/>
    </div>
  );
}
