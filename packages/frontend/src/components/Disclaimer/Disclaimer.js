import styles from "./Disclaimer.module.scss";

const Disclaimer = () => {
  return (
    <div className={styles.styleWrapper}>
      <div className={styles.disclaimerWrapper}>
        <h1>Disclaimer</h1>
        <p>
          <strong>FAN PURPOSES ONLY.</strong> V-Updates site is an unofficial,
          non-profit fan site, made by a fan, for fans and is not affiliated in
          any way with Cover Co., Ltd. or Hololive Production. We are not
          compenstated in any way for any portion of this site, and to the best
          of <em>V-Updates' </em>
          {"\u00A0"} knowledge, all content, images, videos, sounds, photos
          etc., if any, are being used in compliance with the {"["}
          <strong>FAN WORK GUIDELINES</strong>
          {"]"} {"("}https://en.hololive.tv/terms{")"}.
        </p>
        <p>
          <strong>V-UPDATES RESPECT THE PRIVACY OF THE CHARACTERS.</strong>{" "}
          V-Updates will not share any personal information/pictures/videos
          which weren't posted by the Characters themselves. We will ensure that
          the information we share on the site will not impair the dignity or
          goodwill of the Characters. We will not publish illegal download links
          to official content, including concerts, voice packs, audios or
          videos, and all other merchandise and content, related to the
          Character's work and career.
        </p>
        <p>
          <strong>
            ‍V-UPDATES DO NOT OWN ANY MEDIA DISPLAYED ON THIS FAN SITE.
          </strong>{" "}
          Photos, audios and videos published on this fan site, as well as
          articles and interviews, are fully owned by their respective
          authors/owners. We do not claim anything as our own.
        </p>
        <p>
          ‍<strong>NO COPYRIGHT INFRIGMENT IS INTENDED.</strong> If you own any
          content displayed here and want it to be deleted, please,{" "}
          <strong>contact us</strong> immediately.
        </p>
        <p>
          <strong>WE STRIVE TO POST ACCURATE INFORMATION.</strong> The
          information given by this site is for general guidance on matters
          relating to the Characters. Even if <em>V-Updates</em> takes every
          precaution to ensure that the content is both current and accurate,
          errors can occur. Additionally, given that the source is mostly in
          Japanese, there may be delays, omissions, or inaccuracies in the
          information contained on the site.<em>V-Updates</em> is not
          responsible for any errors or omissions, or for the results obtained
          from the use of this information.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
