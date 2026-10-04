import { useInView } from '../hooks/useInView';

const HIDDEN = {
  up: 'opacity-0 translate-y-8',
  left: 'opacity-0 -translate-x-8',
};

export default function Reveal({ as = 'div', delay = 0, from = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInView({ delay });
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0 translate-y-0' : HIDDEN[from]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
