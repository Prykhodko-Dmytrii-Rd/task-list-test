import {Formik, Form, Field, FormikProps, FormikValues} from "formik";
import {useDispatch} from "react-redux";
import {getAllTasksAction, taskActionCreators} from "../../store/slices/task-slice";
import Input from "../Input/Input";
import Select from "../Select/Select";
import options from "../../data/mock/options";
import IFilter from "../../common/types/filter";
import Button from "../Button/Button";
import styles from "./Header.module.scss"
import {setParams} from "../../services/url-params";
import {useHistory} from "react-router-dom"

interface HeaderProps {
    filter: IFilter,
    setFilters: (val: IFilter) => void
}

const Header = ({filter, setFilters}: HeaderProps) => {
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div>
            <Formik
                initialValues={filter}
                enableReinitialize
                onSubmit={(values) => {
                    dispatch(getAllTasksAction(values))
                    history.push("/tasks?" + setParams(values).toString())
                    setFilters(values)
                }}
            >
                {
                    ((props: FormikProps<FormikValues>) => (
                            <Form>
                                <h1 className={styles.title}>Filters</h1>
                                <div className={styles.form}>
                                    <div className={styles.inputsContainer}>
                                        <Field name='name'>
                                            {({field}: any) => (
                                                <Input id='name' title='Name' type='text' field={field}
                                                       placeholder={''}/>
                                            )}
                                        </Field>
                                        <Field name='status'>
                                            {({field}: any) => (
                                                <Select id='status' title='Status' field={field} props={props}
                                                        options={options}/>
                                            )}
                                        </Field>
                                        <Field name='dateFrom'>
                                            {({field}: any) => (
                                                <Input id='dateFrom' title='Due Date (From)' type='date' field={field}
                                                       placeholder={''}/>
                                            )}
                                        </Field>
                                        <Field name='dateTo'>
                                            {({field}: any) => (
                                                <Input id='dateTo' title='Due Date (To)' type='date' field={field}
                                                       placeholder={''}/>
                                            )}
                                        </Field>
                                    </div>
                                    <div className={styles.line}/>
                                    <div className={styles.buttonsContainer}>
                                        <Button like={"secondary"} title={"Clear"} type={"button"}
                                                onClick={() => setFilters({
                                                    name: "",
                                                    status: "",
                                                    dateTo: "",
                                                    dateFrom: ""
                                                })}/>
                                        <Button like={"primary"} title={"Apply"} type={"submit"}/>
                                    </div>
                                </div>
                            </Form>
                        )
                    )
                }
            </Formik>
        </div>
    );
};

export default Header;