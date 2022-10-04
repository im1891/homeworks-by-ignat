import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions: any[] = [options?.map((o, i) => <option key={o + '-' + i} className={s.option}
                                                                 value={o}>{o}</option>)]; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    let selectClassName = `${s.select} ${className ? className : ''}`

    return (
        <select onChange={onChangeCallback} className={selectClassName} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
