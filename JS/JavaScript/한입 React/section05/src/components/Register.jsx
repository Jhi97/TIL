//간단한 회원가입 폼
//1.이름
//2.생년월일
//3.국적
//4.자기소개

import { useState } from 'react';

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

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  return (
    <div>
      <div>
        <input
          value={input.name}
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
          }}
          placeholder={'이름'}
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setInput({ ...input, birth: e.target.value });
          }}
          type="date"
        />
      </div>
      <div>
        <select
          value={input.country}
          onChange={(e) => {
            setInput({ ...input, country: e.target.value });
          }}
        >
          <option></option>
          <option>한국</option>
          <option>미국</option>
          <option>일본</option>
        </select>
      </div>

      <div>
        <textarea
          value={input.bio}
          onChange={(e) => {
            setInput({ ...input, bio: e.target.value });
          }}
        />
        {input.bio}
      </div>
    </div>
  );
}
