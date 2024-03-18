import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Feature One */}
          <div className="px-8 py-6 border border-gray-200 rounded-lg bg-white text-center sm:px-6">
            <h3 className="text-lg font-bold text-indigo-800">Premium Templates</h3>
            <p className="max-w-md mx-auto leading-relaxed xl:text-lg mt-2 text-base text-gray-600">IDEmpire offers high-quality IDs that are fully scannable, providing fully customizable templates with your photo and information using the official photo saturation and text fonts. We bypass the latest security measures and include microprinting, holographic overlays, UV ink, black light features, security patterns, guilloche patterns, optical variable ink, embedded holograms, laser perforation, barcode and magnetic stripe encoding and intaglio printing.</p>
          </div>
          {/* Feature Two */}
          <div className="px-8 py-6 border border-gray-200 rounded-lg bg-white text-center sm:px-6">
            <h3 className="text-lg font-bold text-indigo-800">Custom Credentials</h3>
            <p className="max-w-md mx-auto leading-relaxed xl:text-lg mt-2 text-base text-gray-600">The difference between a genuine and a fake ID is often obvious because the latter is made from a special type of cardboard created for official identification by the US government. IDEmpire uses the same quality equipment and materials as the DMV, allowing for the production of counterfeit IDs with detailed features such as microprinting that are specific to each state&apos;s ID requirements. This includes access to the same printers that the DMV uses to create driver&apos;s licenses and ID cards.</p>
          </div>
          {/* Feature Three */}
          <div className="px-8 py-6 border border-gray-200 rounded-lg bg-white text-center sm:px-6">
            <h3 className="text-lg font-bold text-indigo-800">Our Process</h3>
            <p className="max-w-md mx-auto leading-relaxed xl:text-lg mt-2 text-base text-gray-600">IDEmpire&apos;s method for producing fake IDs is both simple and effective, focusing on rapid production without compromising on quality. For the best results, wear darker clothing to provide contrast against the background and highlight your facial features.  Cleanliness and grooming are advised for clarity in the photo, which should be passport-sized for seamless integration into the ID. We handle the design, materials, and security features, and once everything is finalized, we create and print your fake ID.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
