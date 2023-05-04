const SetHealthInput: React.FC<any> = (props) => {
    
    const { healthInput, setHealthInput} = props;
    return (<input type="number" 
    value={healthInput} 
    onChange={(e) => setHealthInput(parseInt(e.target.value))} />)
};

export default SetHealthInput;