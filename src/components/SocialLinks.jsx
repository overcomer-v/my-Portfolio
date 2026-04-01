export function SocialLinks({ iconData, to }) {
  return (
    <a href={to}>
      <i className={`${iconData} bg-neutral-800 rounded-full p-2 hover:bg-neutral-100 hover:text-neutral-900`}></i>
    </a>
  );
}