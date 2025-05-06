//간단한 회원가입 폼
//1.이름
//2.생년월일
//3.국적
//4.자기소개

import { useState, useRef } from 'react';

export default function Register() {
  // const [name, setName] = useState('이름');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [Bio, setBio] = useState('');

  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  // const refObj = useRef(0);
  const countRef = useRef(0);
  const inputRef = useRef();
  console.log('Register 렌더링');

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      {/* <div>
        <button
          onClick={() => {
            refObj.current++;
            console.log(refObj.current);
          }}
        >
          ref + 1
        </button>
      </div> */}
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={'이름'}
        />
      </div>
      <div>
        <input name="birth" onChange={onChange} type="date" />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>일본</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
