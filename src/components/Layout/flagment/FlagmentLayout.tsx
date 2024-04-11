type _T_Props = {
    children: React.ReactNode;
};

export const FlagmentLayout = (props: _T_Props) => {
    return (
        <div className="flagment-layout">
            <div className="contents">{props.children}</div>
        </div>
    );
};
