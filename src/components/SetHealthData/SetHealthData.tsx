import { useRef } from "react";
import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_PR, UPDATE_SBP, UPDATE_SR, stateType } from "../../store/storeTypes";
import SetHealthInput from "./SetHealthInput";

const SetHealthData: React.FC<{
    state: stateType,
    healthInput: number,
    setHealthInput: any,
    updateHealthData: (inputValue: any) => void
}> = (props) => {
    const selectRef: any = useRef();
    const { state, healthInput, setHealthInput,updateHealthData } =props;
    return (
        <div>
                <form >
                    <label >Choose a Health Data:</label>
                    <br />
                    <select name="healthData" id="healthData" ref={selectRef}>
                        <option value={UPDATE_BP}>{state.BP.name}</option>
                        <option value={UPDATE_HR}>{state.HR.name}</option>
                        <option value={UPDATE_SBP}>{state.SBP.name}</option>
                        <option value={UPDATE_DBP}>{state.DBP.name}</option>
                        <option value={UPDATE_PR}>{state.PR.name}</option>
                        <option value={UPDATE_SR}>{state.SR.name}</option>
                    </select>

                    <SetHealthInput healthInput={healthInput} setHealthInput={setHealthInput} />
                    <br />
                    <button type="button" onClick={() =>updateHealthData(selectRef.current.value) }>submit</button>
                </form>

            </div>
    )
};

export default SetHealthData;