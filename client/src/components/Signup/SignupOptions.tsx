import React from 'react';

interface Options {
  selectInputHandler : any;
}

function SignupOptions({selectInputHandler}:Options) {

  let gender: [{value: string, label: string}[], string] = [
      [
        { value : '선택안함' , label : '선택안함'},
        { value : '남자' , label : '남자'},
        { value : '여자' , label : '여자'},
      ],
      '성별',
  ]

  const age: [{value: string, label: string}[], string] = [
      [
        { value: '선택안함', label: '선택안함' },
        { value: '10대', label: '10대' },
        { value: '20대', label: '20대' },
        { value: '30대', label: '30대' },
        { value: '40대', label: '40대' },
        { value: '50대', label: '50대' },
        { value: '60대 이상', label: '60대 이상' },
      ],
    '연령대'
    ]

    return (
      <div>
        <select onChange = {(e)=>selectInputHandler(e,gender[1])}>
        {gender[0].map((el,idx)=>{
          return (
            <option
            key = {idx}
            value = {el.value}
            >{el.label}</option>
          )
        })}
        </select>

        <select onChange = {(e)=>selectInputHandler(e,age[1])}>
        {age[0].map((el,idx)=>{
          return (
            <option
            key = {idx}
            value = {el.value}
            >{el.label}</option>
          )
        })}
        </select>
      </div>

    )
}

export default SignupOptions