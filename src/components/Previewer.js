const Previewer = ({ dangerouslySetInnerHTML }) => {
	return (
		<div className="box-container">
			<h2 className="style-subheading">Preview</h2>
			<div
				className="preview-box boxes"
				id="preview"
				dangerouslySetInnerHTML={dangerouslySetInnerHTML}
			></div>
		</div>
	);
};

export default Previewer;
