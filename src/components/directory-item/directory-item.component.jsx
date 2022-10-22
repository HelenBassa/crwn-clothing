import { DirectoryItemContainer, BackgoundImage, Body } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <BackgoundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem