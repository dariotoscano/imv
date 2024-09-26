import styles from "./VillageCard.module.scss"
import classnames from "classnames"
import Link from "next/link"
import StarIcon from "@/icons/Star"

const VillageCard = ({village, className}) => {
  return (
    <div className={classnames(styles.card,className)}>
      <Link href={`/villaggi/${village.id}`}>
        <span className={styles.image}>
          <img src={village.img} />
        </span>
        <div className={styles.meta}>
          {village.classification && (
            <span className={styles.stars}>
              {Array.from({length: village.classification}, (_, i) => i + 1).map((num) => (
                <StarIcon key={num} />
              ))}
            </span>
          )}
          <span className={styles.brand}>{village.brand}</span>
        </div>
        <span className={styles.name}>{village.name}</span>
      </Link>
    </div>
  )
}

export default VillageCard
