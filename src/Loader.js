import React, { useContext, useEffect } from 'react';


import { ProgressSpinner } from 'primereact/progressspinner';


import styled from 'styled-components'
import { ToggleContext } from './dataContexts/ToggleContext';

const LoaderSetup = styled.div`
    width: 100%;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    `

const LoaderBack = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 199;
    background-color:rgba(65, 64, 99, .5);
    `

const Loader = () => {

    const { isLoading, setIsLoading } = useContext(ToggleContext)


    const Load = () => {
        console.log("got here first")
        if (isLoading===true){
            console.log("got here")
            return <LoaderBack><LoaderSetup><ProgressSpinner/></LoaderSetup></LoaderBack>
        } else {
            return <div></div>
        }
    }
    return (
        
            <React.Fragment>
               <Load />
            </React.Fragment>
        
    )
    
};

export default Loader

