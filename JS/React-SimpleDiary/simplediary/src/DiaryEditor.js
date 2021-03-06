import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentsInput = useRef();

    const [state, setState] = useState ({
        author: "",
        contents: "",
        emotion: 1,
    });

    const handleChangeState = (e)=>{
        // console.log(e.target.name);
        // console.log(e.target.value);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = () =>{
        if(state.author.length < 1){
            //alert('작성자는 최소 1글자 이상 입력해주세요');
            //focus
            authorInput.current.focus();
            return;
        }

        if(state.contents.length < 5){
            //alert('일기 본문은 최소 5글자 이상 입력해주세요');
            //focus
            contentsInput.current.focus();
            return;
        }

        onCreate(state.author, state.contents, state.emotion);
        console.log(state);
        alert('저장 성공!');
        setState({
            author:"",
            contents:"",
            emotion: 1,
        });
    }

    // const [author, setAuthor] = useState("");
    // const [contents, setContents] = useState("");

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                ref={authorInput}
                name="author"
                value={state.author} 
                onChange={handleChangeState}
                // onChange={(e)=>{
                //     setState({
                //         ...state,
                //         author: e.target.value,
                //         //contents: state.contents,
                //     });
                //     handleChangeState
                // }}
            />
        </div>
        <div>
            <textarea 
                ref={contentsInput}
                name="contents"
                value={state.contents} 
                onChange={handleChangeState}
                // onChange={(e)=>{
                //     setState({
                //         ...state,
                //         //author: state.author,
                //         contents: e.target.value,
                //     });

                // }}
            />
        </div>
        <div>
            <label>오늘의 감정점수: </label>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>;
};

export default DiaryEditor;