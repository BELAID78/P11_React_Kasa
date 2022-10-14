import { useState } from 'react';
import arrowUp from './../../images/arrow-up.svg';
import arrowDown from './../../images/arrow-down.svg';
import './accordion.scss';

const Accordion = ({isOpen, title, children}) => {
    const [open, setOpen] = useState(isOpen);

    const toggleAccordionHandler = () => {
        setOpen(open => !open);
    }
    
    return (
        <div className='accordion'>
            <div className='accordion-title' onClick={toggleAccordionHandler}>
                <p>{title}</p>
                {
                    open ? <img alt='accordion-arrow' src={arrowUp} /> : <img alt='accordion-arrow' src={arrowDown} />
                }
            </div>
            {
                open && 
                <div className='accordion-body'>
                    {children}
                </div>
            }
        </div>
    )
}

export default Accordion;