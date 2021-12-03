import { useState } from 'react';
import styles from '../styles/UinResult.module.css'
import { Loading } from './Loading';
import { Notfound } from './Notfound';
import { Result } from './Result';

export const UinResult = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState('')
  const [isNoResults, setIsNoResults] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [remainderValue, setRemainderValue] = useState(0)
  const [isReminderVisible, setIsReminderVisible] = useState(false)
  const [isVisibleNumLenReminder, setIsVisibleNumLenReminder] = useState(false)

  function handleChangeSearchInput(e) {
    const value = e.target.value
    setSearchValue(value)
    validateLength(value)
    setIsReminderVisible(false)
    setIsNoResults(false)
    if(value.length === 19 || value.length === 24) {
      const regex = new RegExp(`[0-9]{${value.length}}`)
      const isValid = regex.test(value)
      if (isValid) {
        const checkNum = calculateCheckNumber(value)
        setRemainderValue(`${value}${checkNum}`)
        setIsReminderVisible(true)
      }
    }
  }

  function calculateCheckNumber(input) {
    const checkArr2 = [3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,]
    let res1 = 0
    for(let i = 0; i < input.length; i++) {
      const num = parseInt(input[i])
      const weight = (i % 10) + 1
      const result = num * weight
      res1 += result
    }
    const check1 = res1 % 11
    if(check1 !== 10) {
      return check1
    }
    let res2 = 0
    for(let i = 0; i < input.length; i++) {
      const num = parseInt(input[i])
      const weight = checkArr2[i]
      const result = num * weight
      res2 += result
    }
    const check2 = res2 % 11
    if(check2 !== 10) {
      return check2
    }
    return 0
  }

  function validateLength(input) {
    if(!input) {
      return setIsVisibleNumLenReminder(false)
    }
    if(input.length === 20 || input.length === 25) {
      return setIsVisibleNumLenReminder(false)
    }
    setIsVisibleNumLenReminder(true)
  }

  function handleClickOnReminder(e) {
    e.target.value = e.target.innerText
    handleChangeSearchInput(e)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const uin = e.target[0].value
    setIsLoading(true)
    const response = await fetch(`https://test-task.shtrafovnet.com/fines/${uin}`)
    if (response.ok) {
      const json = await response.json()
      setData(json)
      console.log(json);
    }
    else if(response.status === 404) {
      setData('')
      setIsNoResults(true)
    }
    else if(response.status === 500) {
      setData('')
      setIsNoResults(true)
    }
    setIsLoading(false)

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.uinName}>Получение информации о штрафе по УИН</div>
      <div className={styles.fromWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.digitsLength + " " + (!isVisibleNumLenReminder && styles.hidden )}>
            Неверное колличество символов. Длинна УИН 20 или 25 символов
          </div>
          <input className={styles.input} type="text" name="uin" id="uin" placeholder="Введите УИН" value={searchValue} onChange={handleChangeSearchInput} />
          <button className={styles.btn}>Найти</button>
          <div className={styles.reminder + ' ' + (!isReminderVisible && styles.hidden)} onClick={handleClickOnReminder}>{remainderValue}</div>
        </form>
      </div>
      <div>
        {data && <Result data={data}/>}
        {isLoading && <Loading/>}
        {isNoResults && <Notfound uin={searchValue}/>}
        
      </div>
    </div>
  );
}
