import SaveTemp from "./SaveTemp";
import DataTemp from "./DataTemp";
export default function Wrapper() {
    return (
        <div className="row">
            <strong style={{marginBottom: "30px"}}>Сохраняем и получаем информацию о погоде в Москве</strong>
            <SaveTemp></SaveTemp>
            <DataTemp></DataTemp>
        </div>
    );
}