import styles from "./Tractors.module.scss"

import { selectUser } from '../../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AdminLayout } from '../../../components/AdminLayout';
import { useEffect } from 'react';
import {  getTractor, selectTractors } from '../../../redux/slices/creation';

export const Tractors = () => {
    const user = useSelector(selectUser);
    const tractors = useSelector(selectTractors)
    const dispatch = useDispatch();
    useEffect(() => {
        //@ts-ignore
        dispatch(getTractor(user.organizationId))
    }, [])

    return (
        <>
            <AdminLayout>
                <ul>
                    {
                        tractors?.map((tractor: any) => (
                            <li key={tractor.id}>
                              <div className={styles.tractorItem}>
                                <span>Name: </span> {tractor.name}
                                <span>Vin: </span> {tractor.vin}
                                <span>Year: </span> {tractor.year}
                                <span>Model: </span> {tractor.model}
                                <span>Status: </span> {tractor.status}
                              </div>
                            </li>
                        ))
                    }
                </ul>
            </AdminLayout>
        </>
    );
};
