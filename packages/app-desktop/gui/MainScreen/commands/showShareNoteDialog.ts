import { CommandRuntime, CommandDeclaration, CommandContext } from '@joplin/lib/services/CommandService';
import { _ } from '@joplin/lib/locale';

export const declaration: CommandDeclaration = {
	name: 'showShareNoteDialog',
	label: () => _('Share note...'),
};

export const runtime = (comp: any): CommandRuntime => {
	return {
		execute: async (context: CommandContext, noteIds: string[] = null) => {
			noteIds = noteIds || context.state.selectedNoteIds;

			comp.setState({
				shareNoteDialogOptions: {
					noteIds: noteIds,
					visible: true,
				},
			});
		},
<<<<<<< HEAD
		enabledCondition: 'joplinServerConnected && oneNoteSelected',
=======
		enabledCondition: 'joplinServerConnected && someNotesSelected',
>>>>>>> f7d164be6e23650e5b58480259566ac401b748da
	};
};
