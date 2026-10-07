'use client';

export function SectionHead({ eyebrow, title, intro, action, align = 'left', light = false }) {
  const centered = align === 'center';
  return (
    <div
      className={`flex flex-col gap-6 mb-14 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={centered ? 'max-w-3xl' : 'max-w-2xl'}>
        <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>{eyebrow}</span>
        <h2
          className={`display ${light ? 'display-light text-white' : 'text-[#1F171A]'} text-4xl sm:text-5xl lg:text-6xl mt-5`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {intro && (
          <p className={`mt-5 text-sm sm:text-base font-light leading-relaxed ${light ? 'text-white/75' : 'text-[#5E4B52]'}`}>
            {intro}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export default SectionHead;
