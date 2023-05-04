const ListComp: React.FC<any> = (props) => {
    const {name, value } = props;
    return (
        <li >
        {name} := {value}
    </li>
    );
};

export default ListComp;