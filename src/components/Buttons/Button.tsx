type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
};

const Button = (props: ButtonProps) => {
    const { children, className = "" } = props;

    return (
        <>
            <button className={`rounded-2xl bg-white ${className}`}>{children}</button>
        </>
    );
};

export default Button;
