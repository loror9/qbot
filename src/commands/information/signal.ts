import { CommandContext } from '../../structures/addons/CommandAddons';
import { Command } from '../../structures/Command';
import { getSuccessfulSignalEmbed } from '../../handlers/locale';
import { addSignal } from '../../api';
import { config } from '../../config';

class SignalCommand extends Command {
    constructor() {
        super({
            trigger: 'signal',
            description: 'If configured, this will store a command and make it available through our API.',
            type: 'ChatInput',
            module: 'information',
            args: [
                {
                    trigger: 'group',
                    description: 'Which group would you like to run this action in?',
                    isLegacyFlag: true,
                    autocomplete: true,
                    required: true,
                    type: 'Group',
                },
                {
                    trigger: 'signal',
                    description: 'What signal/command would you like to run?',
                    required: false,
                    type: 'String',
                },
            ],
            permissions: [
                {
                    type: 'role',
                    ids: config.basePermissions.signal,
                    value: true,
                }
            ]
        });
    }

    async run(ctx: CommandContext) {
        addSignal(ctx.args['signal']);
        return ctx.reply({ embeds: [ getSuccessfulSignalEmbed() ] });
    }
}

export default SignalCommand;