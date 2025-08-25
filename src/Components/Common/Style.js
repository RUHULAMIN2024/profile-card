import { getColorsCSS, getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const {
    alignment,
    cardBg,
    cardWidth,
    cardHeight,
    cardBorder,
    cardPadding,
    containerBorderRadius,
    imageBorder,
    imageBorderRadius,
    levelColors,
    levelPadding,
    nameColor,
    nameTypography,
    jobTitleColor,
    jobTitleTypography,
    jobDescriptionColor,
    jobDescriptionTypography,
    messageBtnBorder,
    messageBtnBg,
    messageBtnBorderRadius,
    connectBtnBorder,
    connectBtnBorderRadius,
    connectBtnBg,
  } = attributes;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .box`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `




${getTypoCSS(`${blockSl} .name`, nameTypography)?.googleFontLink}
${getTypoCSS(`${blockSl} .name`, nameTypography)?.styles}

${getTypoCSS(`${blockSl} .job_title`, jobTitleTypography)?.googleFontLink}
${getTypoCSS(`${blockSl} .job_title`, jobTitleTypography)?.styles}

${getTypoCSS(`${blockSl} .job_description`, jobDescriptionTypography)?.googleFontLink}
${getTypoCSS(`${blockSl} .job_description`, jobDescriptionTypography)?.styles}

		

	${blockSl}{
		background: ${cardBg};
		width: ${cardWidth || 350}px;
    height: ${cardHeight}px;
    text-align: ${alignment};
		border: ${cardBorder?.width} ${cardBorder?.style} ${cardBorder?.color};
		padding: ${cardPadding?.top} ${cardPadding?.right} ${cardPadding?.bottom} ${
      cardPadding?.left
    };
    	border-radius: ${containerBorderRadius};
	}
	${blockSl} .image img{
    height: 120px;
    width: 120px;
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
		border: ${imageBorder?.width} ${imageBorder?.style} ${imageBorder?.color};
    border-radius: ${imageBorderRadius};

	}
	${blockSl} .level{
    ${getColorsCSS(levelColors)}
		padding: ${levelPadding?.top} ${levelPadding?.right} ${levelPadding?.bottom} ${
      levelPadding?.left
    };

	}
	${blockSl} .name{
	  color: ${nameColor};

	}
	${blockSl} .job_title{
		color: ${jobTitleColor};
	}
	${blockSl} .job_description{
		color: ${jobDescriptionColor};
	}

	${blockSl} .button .message {
		background: ${messageBtnBg};
		border: ${messageBtnBorder?.width} ${messageBtnBorder?.style} ${
      messageBtnBorder?.color
    };
		border-radius: ${messageBtnBorderRadius};

  	}
	${blockSl} .button .connect {
		background: ${connectBtnBg};
		border: ${connectBtnBorder?.width} ${connectBtnBorder?.style} ${
      connectBtnBorder?.color
    };
		    	border-radius: ${connectBtnBorderRadius};

  	}

	`,
      }}
    />
  );
};
export default Style;
