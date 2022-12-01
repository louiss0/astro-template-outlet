// Write your component's code here!
{
	const templateOutlets = document.body.querySelectorAll('br[data-template-name]');

	const templates = document.querySelectorAll<HTMLTemplateElement>('template[id]');

	templateOutlets.forEach((templateOutlet) => {
		const templateOutletName = templateOutlet.getAttribute('data-template-name');

		const template = Array.from(templates).find(
			(template) => template.getAttribute('id') === templateOutletName
		);

		if (!template) {
			throw new Error(
				`There is no template with the id of ${templateOutletName} please give a template an id`
			);
		}

		templateOutlet.replaceWith(template.content.cloneNode(true));
	});
}
