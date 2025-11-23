interface Props {
  title: string;
}

const Badge = (props: Props) => {
  return (
    <div className="rounded-full flex items-center justify-center border border-neutral-200 px-4 text-neutral-500 hover:bg-neutral-100 transition-colors cursor-default">
      #{props.title}
    </div>
  );
};

export default Badge;
