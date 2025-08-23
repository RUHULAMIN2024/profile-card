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
    levelBg,
    levelPadding,
    nameColor,
    nameSize,
    jobTitleColor,
    jobTitleSize,
    jobDescriptionColor,
    jobDescriptionSize,
    messageBtnBorder,
    messageBtnBg,
    messageBtnBorderRadius,
    connectBtnBorder,
    connectBtnBorderRadius,
    connectBtnBg,
  } = attributes;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .box`;
  console.log(cardPadding);

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		

	${blockSl}{
		background: ${cardBg};
		width: ${cardWidth || 350}px;
    height: ${cardHeight}px;
    text-align: ${alignment};
		border: ${cardBorder?.width} ${cardBorder?.style} ${cardBorder?.color};
		padding: ${cardPadding?.top} ${cardPadding?.right} ${cardPadding?.bottom} ${cardPadding?.left};
    	border-radius: ${containerBorderRadius};
	}
	${blockSl} .image img{
		border: ${imageBorder?.width} ${imageBorder?.style} ${imageBorder?.color};
    	border-radius: ${imageBorderRadius};

	}
	${blockSl} .level{
		background: ${levelBg};
		padding: ${levelPadding?.top} ${levelPadding?.right} ${levelPadding?.bottom} ${levelPadding?.left};

	}
	${blockSl} .name{
		color: ${nameColor};
    font-size: ${nameSize};

	}
	${blockSl} .job_title{
		color: ${jobTitleColor};
    font-size: ${jobTitleSize};
	}
	${blockSl} .job_description{
		color: ${jobDescriptionColor};
    font-size: ${jobDescriptionSize};
	}
	${blockSl} .button .message {
		background: ${messageBtnBg};
		border: ${messageBtnBorder?.width} ${messageBtnBorder?.style} ${messageBtnBorder?.color};
		border-radius: ${messageBtnBorderRadius};

  	}
	${blockSl} .button .connect {
		background: ${connectBtnBg};
		border: ${connectBtnBorder?.width} ${connectBtnBorder?.style} ${connectBtnBorder?.color};
		    	border-radius: ${connectBtnBorderRadius};

  	}

	`,
      }}
    />
  );
};
export default Style;
