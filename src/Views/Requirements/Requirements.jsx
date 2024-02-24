import React, { useState } from 'react';
import s from './Requirements.module.scss';

//assets
import backgroundAbout from '../../Assets/background-about.png';
import { useTranslation } from 'react-i18next';
import { PiComputerTower } from "react-icons/pi";
import { BsMotherboard } from "react-icons/bs";
import { IoHardwareChipOutline } from "react-icons/io5";
import { BiMicrochip } from "react-icons/bi";
import { RiUDiskLine } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";

const Requirements = () => {

  const [minimunReq, setMinimunReq] = useState(true);

  const { t } = useTranslation();

  const minimun = [
    {
      title: t('about.os'),
      data: 'Windows 10/11',
      icon: <PiComputerTower size={'1.6em'}/>
    },
    {
      title: t('about.graphics'),
      data: 'AMD Radeon RX 580 8GB | NVIDIA GeForce GTX 1060 6GB',
      icon: <BsMotherboard size={'1.6em'}/>
    },
    {
      title: t('about.processor'),
      data: 'AMD Ryzen 5 1600X | Intel Core i5-7600K',
      icon: <IoHardwareChipOutline size={'1.6em'}/>
    },
    {
      title: t('about.memory'),
      data: '8 GB',
      icon: <BiMicrochip size={'1.6em'}/>
    },
    {
      title: t('about.disc'),
      data: '50 GB',
      icon: <RiUDiskLine size={'1.6em'}/>
    },
    {
      title: t('about.recommend'),
      data: '',
      icon: <TbArrowsExchange size={'1.6em'}/>,
      click: true
    }
  ];

  const recommend = [
    {
      title: t('about.os'),
      data: 'Windows 10/11',
      icon: <PiComputerTower size={'1.6em'}/>
    },
    {
      title: t('about.graphics'),
      data: 'AMD Radeon RX 6650 XT 8GB | NVIDIA GeForce RTX 4060 8GB',
      icon: <BsMotherboard size={'1.6em'}/>
    },
    {
      title: t('about.processor'),
      data: 'AMD Ryzen 9 7900X | Intel Core i7-13700K',
      icon: <IoHardwareChipOutline size={'1.6em'}/>
    },
    {
      title: t('about.memory'),
      data: '16 GB',
      icon: <BiMicrochip size={'1.6em'}/>
    },
    {
      title: t('about.disc'),
      data: '100 GB',
      icon: <RiUDiskLine size={'1.6em'}/>
    },
    {
      title: t('about.minimum'),
      data: '',
      icon: <TbArrowsExchange size={'1.6em'}/>,
      click: true
    }
  ]

  return (
    <div className={s.container} id="requirements">
      <div className={s.content}>
        <div className={s.title}>
            <p>{t('about.sys_requirements')}</p>
            <span>
              {t('about.message')}
            </span>
        </div>

        <div className={s.requirements}>
            {
              minimunReq && minimun.map((item, index) => (
                <div className={item.click ? s.require_item_hover : s.require_item} onClick={item.click ? () => setMinimunReq(false) : null} key={index}>
                    <div className={s.icon}>{item.icon}</div>
                    <div className={s.text}>
                        <p style={{fontWeight: 600}}>{item.title}</p>
                        <p style={{fontWeight: 200}}>{item.data}</p>
                    </div>
                </div>
              ))
            }
            {
              !minimunReq && recommend.map((item, index) => (
                <div className={item.click ? s.require_item_hover : s.require_item} onClick={item.click ? () => setMinimunReq(true) : null} key={index}>
                    <div className={s.icon}>{item.icon}</div>
                    <div className={s.text}>
                        <p style={{fontWeight: 600}}>{item.title}</p>
                        <p style={{fontWeight: 200}}>{item.data}</p>
                    </div>
                </div>
              ))
            }
        </div>
      </div>
      <img src={backgroundAbout} alt='background-about' className={s.background}/>
    </div>
  )
}


export default Requirements;
