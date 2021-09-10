import React, {ReactElement} from 'react';
import ReactSelect, {Props, StylesConfig} from 'react-select';
import {FormikProps, FormikValues} from 'formik';
import IOption from "../../common/types/option";
import styles from "./Select.module.scss"

interface ISelectProps extends Props {
    id: string,
    title: string,
    options: IOption[],
    field: any;
    props: FormikProps<FormikValues>;
}
const styling = {
    control: (provided:any, state:any) => ({
        ...provided,
        height: '35px',
        margin: '',
        padding:'0 5px',
        border:'2px solid lightgray',
        boxShadow: 'none',
        borderRadius: '8px',
    }),
    valueContainer: (provided:any) => ({
        ...provided,
        height: '30px',
        padding: '7px 16px 0',
        fontSize: '16px'
    }),
    input: (provided:any) => ({
        ...provided,
        marginTop: '-7px'
    }),
    indicatorSeparator: (provided:any) => ({
        ...provided,
        display: 'none'
    }),
    menuList: (provided:any) => ({
        ...provided,
        padding: '8px 0',
        marginTop:'-15px'
    }),
    indicatorsContainer: (provided:any) => ({
        ...provided,
        height: '35px'
    }),
};

const Select = ({id, title, options, field, props}: ISelectProps): ReactElement => {
    return (
        <div className={styles.selectContainer}>
            {
                title &&
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    {title}
                </label>
            }
            <ReactSelect
                styles={styling}
                value={{value:field.value,label:field.value}}
                options={options}
                onChange={(item) => {
                    if (field) {
                        item && props?.setFieldValue(field.name, item.value)
                    }
                }}
                isSearchable={false}
            />
            {
                field &&
                <>
                    <input type='hidden' id={id} {...field} />
                </>
            }
        </div>
    );
}

export default  Select
