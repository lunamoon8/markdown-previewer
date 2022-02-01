const Editor = ({ value, onChange }) => {
	return (
		<div className="box-container">
			<h2 className="style-subheading">Editor</h2>
			<textarea
				className="editor-box boxes"
				id="editor"
				value={value}
				onChange={onChange}
			></textarea>
		</div>
	);
};

export default Editor;
