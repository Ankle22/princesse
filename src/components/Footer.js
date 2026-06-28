function Footer({ content }) {
  return (
    <footer>
      <p className="script">{content.celebration}</p>
      <p className="small">{content.signature}</p>
    </footer>
  );
}

export default Footer;
