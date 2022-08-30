import styles from "./Drivers.module.scss"

import { selectUser } from '../../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../components/AdminLayout';
import { useEffect } from 'react';
import { getDrivers, selectDrivers } from '../../../redux/slices/creation';


export const Drivers = () => {
    const user = useSelector(selectUser);
    const drivers = useSelector(selectDrivers)
    const dispatch = useDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(getDrivers(user.organizationId))
    }, [])
    return (
        <>
            <AdminLayout>
                <ul>
                    {
                        drivers?.map((driver: any) => (
                            <li key={driver.id}>
                              <div className={styles.driverItem}>
                                <span>Name: </span> {driver.name}
                                <span>Email: </span> {driver.email}
                                <span>Phone: </span> {driver.phone}
                                <span>Status: </span> {driver.status}
                              </div>
                            </li>
                        ))
                    }
                </ul>
            </AdminLayout>
        </>
    );
};
