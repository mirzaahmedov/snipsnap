const WindowsWindowControls = () => {
  return (
    <div className="flex items-center justify-end">
      <MinimizeIcon />
      <MaximizeIcon />
      <CloseIcon />
    </div>
  );
};

const MinimizeIcon = () => {
  return (
    <svg
      width={36}
      height={28}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4 14C12.4 13.7055 12.6388 13.4667 12.9334 13.4667H23.0667C23.3612 13.4667 23.6 13.7055 23.6 14C23.6 14.2946 23.3612 14.5333 23.0667 14.5333H12.9334C12.6388 14.5333 12.4 14.2946 12.4 14Z"
        className="fill-neutral-100 mix-blend-difference"
      />
    </svg>
  );
};
const MaximizeIcon = () => {
  return (
    <svg
      width={36}
      height={28}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0667 16.1334C11.0667 17.017 11.783 17.7334 12.6667 17.7334H14.2667V16.6668H12.6667C12.3721 16.6668 12.1333 16.4279 12.1333 16.1334V8.66671C12.1333 8.37216 12.3721 8.13338 12.6667 8.13338H20.1333C20.4279 8.13338 20.6667 8.37216 20.6667 8.66671V10.2667H15.8667C14.983 10.2667 14.2667 10.983 14.2667 11.8667V19.3333C14.2667 20.2169 14.983 20.9333 15.8667 20.9333H23.3333C24.2169 20.9333 24.9333 20.2169 24.9333 19.3333V11.8667C24.9333 10.983 24.2169 10.2667 23.3333 10.2667H21.7333V8.66671C21.7333 7.78305 21.0169 7.06671 20.1333 7.06671H12.6667C11.783 7.06671 11.0667 7.78305 11.0667 8.66671V16.1334ZM15.3333 11.8667C15.3333 11.5721 15.5721 11.3333 15.8667 11.3333H23.3333C23.6278 11.3333 23.8667 11.5721 23.8667 11.8667V19.3333C23.8667 19.6279 23.6278 19.8666 23.3333 19.8666H15.8667C15.5721 19.8666 15.3333 19.6279 15.3333 19.3333V11.8667Z"
        className="fill-neutral-100 mix-blend-difference"
      />
    </svg>
  );
};
const CloseIcon = () => {
  return (
    <svg
      width={36}
      height={28}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5671 10.3003C22.8066 10.0608 22.8066 9.67249 22.5671 9.43297C22.3276 9.19345 21.9392 9.19345 21.6998 9.43297L18.0001 13.1326L14.3004 9.43297C14.0609 9.19345 13.6726 9.19345 13.4331 9.43297C13.1935 9.67249 13.1935 10.0608 13.4331 10.3003L17.1327 14L13.4331 17.6996C13.1935 17.9392 13.1935 18.3275 13.4331 18.567C13.6726 18.8065 14.0609 18.8065 14.3004 18.567L18.0001 14.8674L21.6998 18.567C21.9392 18.8065 22.3276 18.8065 22.5671 18.567C22.8066 18.3275 22.8066 17.9392 22.5671 17.6996L18.8675 14L22.5671 10.3003Z"
        className="fill-neutral-100 mix-blend-difference"
      />
    </svg>
  );
};

export { WindowsWindowControls };