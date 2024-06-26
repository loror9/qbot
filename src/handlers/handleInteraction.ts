import { discordClient, getGroupClient } from '../main';
import { CommandContext } from '../structures/addons/CommandAddons';
import {
    Interaction,
    CommandInteraction,
    AutocompleteInteraction,
    CacheType
} from 'discord.js';
import { handleRobloxUser } from '../arguments/handleRobloxUser';
import { handleRobloxRole } from '../arguments/handleRobloxRole';
import { handleGroup } from '../arguments/handleGroup';
import { getUnknownCommandMessage, getNoPermissionEmbed } from '../handlers/locale';
import { findGroupByName } from '../config';

const handleInteraction = async (payload: Interaction<CacheType>) => {
    if (payload instanceof CommandInteraction) {
        const interaction = payload as CommandInteraction;
        if (!interaction.channel || !interaction.guild) return interaction.reply({ embeds: [getUnknownCommandMessage()] });

        const command = discordClient.commands.find((cmd) => (new cmd()).trigger === interaction.commandName);
        const context = new CommandContext(interaction, command);
        const permission = context.checkPermissions();

        if (!permission) {
            context.reply({ embeds: [getNoPermissionEmbed()] });
        } else {
            await context.defer();

            try {
                (new command()).run(context);
            } catch (err) {
                console.log(err);
            }
        }
    } else if (payload instanceof AutocompleteInteraction) {
        const interaction = payload as AutocompleteInteraction;
        if (!interaction.channel || !interaction.guild) return;

        const focusedOption = payload.options.getFocused(true);
        const command = await discordClient.commands.find((cmd) => (new cmd()).trigger === interaction.commandName);

        if (!command) return;
        const focusedArg = (new command()).args.find((arg) => arg.trigger === focusedOption.name);

        const robloxGroupName = interaction.options.getString('group');

        try {
            const groupConfig = await findGroupByName(robloxGroupName);
            const robloxGroup = getGroupClient(groupConfig.groupId);
            if (focusedArg.type === 'RobloxRole' && robloxGroup) await handleRobloxRole(robloxGroup, interaction, focusedOption);
        } catch (error) {}

        if (focusedArg.type === 'RobloxUser') handleRobloxUser(interaction, focusedOption);
        if (focusedArg.type === 'Group') await handleGroup(interaction, focusedOption);
    }
}

export { handleInteraction };
