'use client'
import styles from "./Services.module.scss"
import Section from "../Section"
import Icon from "@/components/Icon"
import Button from "@/components/Button"
import {useState} from "react"
import classnames from "classnames"

export default function Services({village}) {
  const [showAll, setShowAll] = useState(false);
  return (
    <Section className={styles.section} title="Tutti i servizi">
      <div className={classnames(styles.wrap,{[styles.collapsed]:!showAll})}>
        <div className={styles.services}>
          <Group
            icon="beach"
            label="La spiaggia"
            items={[
              {label:'Spiaggia privata attrezzata',payment:false},
              {label:'Spiaggia sabbiosa',payment:false},
              {label:'Fondale digradante',payment:false},
              {label:'Bar in spiaggia a pagamento',payment:false},
              {label:'Docce',payment:false},
              {label:'Servizi igienici',payment:false},
              {label:'Spogliatoi',payment:false},
              {label:'Animazione',payment:false},
              {label:'Passerella',payment:false},
              {label:'Sedia JOB',payment:false},
              {label:'Beach volley',payment:false},
              {label:'Beach tennis',payment:false},
              {label:'Animali non ammessi',payment:false}
            ]}
          />
          <Group
            icon="pools"
            label="Piscine"
            items={[
              {label:'Piscina Semiolimpionica',payment:false},
              {label:'Piscina per bambini',payment:false},
              {label:'Piscina con acquascivoli e zona idromassaggio',payment:false}
            ]}
          />
          <Group
            icon="wellness"
            label="Benessere"
            items={[
              {label:'Centro Bluwellness',payment:true}
            ]}
          />
          <Group
            icon="animals"
            label="Animali"
            items={[
              {label:'Non ammessi',payment:false}
            ]}
          />
          <Group
            icon="food"
            label="Ristorazione"
            items={[
              {label:'Bar',payment:false},
              {label:'Bar in spiaggia',payment:false},
              {label:'Braceria',payment:false},
              {label:'Ristorante climatizzato con sala esterna',payment:false},
              {label:'Servizio a buffet',payment:false},
              {label:'Tavoli condivisi',payment:false},
              {label:'Cucina per celiaci/intolleranti',payment:false},
              {label:'Biberoneria/Cucina mamme',payment:false}
            ]}
          />
          <Group
            icon="hospitality"
            label="Accoglienza"
            items={[
              {label:'Reception',payment:false},
              {label:'Bancomat',payment:false},
              {label:'Deposito bagagli',payment:false},
              {label:'Late Check-out',payment:true},
              {label:'Banco escursioni',payment:true}
            ]}
          />
          <Group
            icon="accessibility"
            label="Accessibilità"
            items={[
              {label:'Struttura priva di barriere architettoniche',payment:false},
              {label:'Camere dedicate',payment:false},
              {label:'Posto riservato in spiaggia e auditorium',payment:false},
              {label:'Passerella in spiaggia',payment:false},
              {label:'Sedia JOB',payment:false},
              {label:'Parcheggio riservato',payment:false}
            ]}
          />
          <Group
            icon="room"
            label="Camera"
            items={[
              {label:'Angolo cottura',payment:false},
              {label:'TV',payment:false},
              {label:'Balcone o vista mare',payment:false},
              {label:'Bagno con doccia',payment:false},
              {label:'Asciugacapelli',payment:false},
              {label:'Telefono',payment:false},
              {label:'Cassetta di sicurezza',payment:false},
              {label:'Aria condizionata',payment:false},
              {label:'Letto matrimoniale',payment:false},
              {label:'Letti singoli',payment:false},
              {label:'Letto a castello',payment:false},
              {label:'Divano letto',payment:false}
            ]}
          />
          <Group
            icon="shopping"
            label="Shopping"
            items={[
              {label:'Boutique',payment:true},
              {label:'Tabacchi',payment:true},
              {label:'Rivendita giornali',payment:true},
              {label:'Negozi souvenir',payment:true}
            ]}
          />
        </div>
        {!showAll && (
          <div className={styles.more}>
            <Button onClick={()=>setShowAll(true)}>Mostra tutti</Button>
          </div>
        )}
      </div>
    </Section>
  )
}


const Group = ({icon, label, items}) => {
  return (
    <div className={styles.group}>
      <Icon className={styles.icon} file={icon} alt={label} />
      <p className={styles.name}>{label}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.label}{item.payment && (
            <>
              {` `}
              <em>a pagamento</em>
            </>
          )}</li>
        ))}
      </ul>
    </div>
  )
}
