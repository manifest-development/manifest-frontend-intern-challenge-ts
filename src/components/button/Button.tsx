import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  active?: boolean;
  invertOnHover?: boolean;
  mobile?: boolean;
}


export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  active = true,
  mobile,
  invertOnHover
}) => {
  const isDisabled = !active;



  const baseClasses =
    'flex justify-center items-center font-semibold gap-[10px] transition-all font-work';


   const responsiveSize = mobile === true
    ? 'w-[329px] h-[40px] rounded-[9px] pt-[8px] pb-[8px] pr-[129px] pl-[129px]'
    : mobile === false
    ? 'w-[600px] h-[42px] rounded-[8px] pt-[8px] pb-[8px] pr-0 pl-0'
    : 
      'w-[329px] h-[40px] rounded-[9px] pt-[8px] pb-[8px] pr-[129px] pl-[129px] md:w-[600px] md:h-[42px] md:rounded-[8px] md:pr-0 md:pl-0';


  const baseHover = variant === 'text'
    ? ''
    :
    'cursor-pointer hover:shadow-[0_4px_8px_rgba(46,45,41,0.05)]';    


  const shared = clsx(
    baseClasses,
    responsiveSize,
    isDisabled && 'cursor-not-allowed',
    !isDisabled && baseHover
  );

   const hoverOverlayWrapper = clsx(
    'transition-all flex items-center justify-center',
    'hover:bg-hover-overlay',
    mobile === true
        ? 'w-[375px] h-[70px] ml-[8px] mt-[369px]'
      : mobile === false
      ? 'w-[637px] h-[70px] ml-[40px] mt-[390px]'
      : 
        'w-[329px] h-[40px] rounded-[9px] pt-[8px] pb-[8px] pr-[129px] pl-[129px] md:w-[600px] md:h-[42px] md:rounded-[8px] md:pr-0 md:pl-0');


  const variantClasses = clsx({
    //Primary
    'bg-mint text-white': variant === 'primary' && active,
    'text-disabled bg-lightPeach': variant === 'primary' && isDisabled,
    'bg-mint text-mint hover:bg-white hover:text-mint': variant === 'primary' && active && invertOnHover,

    //Secondary
    'bg-white border border-mint text-mint': variant === 'secondary' && active,
    'bg-white border border-lightPeach text-disabled':variant === 'secondary' && isDisabled,
    'bg-white border border-mint text-mint hover:bg-mint hover:text-white': variant === 'secondary' && active && invertOnHover,


    //Text
    'bg-transparent text-mint text-base': variant === 'text'
  });

  const buttonElement = (
        <button
                onClick={active ? onClick : undefined}
                disabled={isDisabled}
                className={clsx(shared, variantClasses)}
            >
      {children}
    </button>
  
  );
  return variant === 'text' ? buttonElement : <div className={hoverOverlayWrapper}>
    {buttonElement}
  </div>
};

export default Button;
