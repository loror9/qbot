import { ActivityType } from 'discord.js';
import { BotConfig } from './structures/types';

const config: BotConfig = {
    slashCommands: true,
    api: true,
    status: 'online',

    activity: {
        enabled: true,
        type: ActivityType.Watching,
        value: 'over The State of Absaroka',
    },

    legacyCommands: {
        enabled: true,
        prefixes: ['q!'],
    },

    logChannels: {
        actions: '1223319361012629687',
        shout: '1223319361012629687',
    },

    verificationChecks: {
        enabled: true,
        bypassRoleIds: [],
        bloxlinkGuildId: '1214970557192343552',
    },

    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 10,
    },

    basePermissions: {

        /**
         * Access to all commands. Please be careful with this.
         */
        all: ['1222655511925620776'],
        /**
         * Access to the promote, demote, setrank, and fire commands.
         */
        ranking: [],
        /**
         * Access to the info, add-xp, remove-xp, and xp-rankup commands.
         */
        users: [],
        /**
         * Access to the shout command.
         */
        shout: [],
        /**
         * Access to the join-requests, accept-join, and deny-join commands.
         */
        join: [],
        /**
         * Access to the signal command.
         */
        signal: [],
        /**
         * Access to the revert-ranks, exile, groupban, and ungroupban command.
         */
        admin: []
    },

    groups: [
        {
            /**
             * The name of the group, to be uniquely identified by.
             */
            name: "State of Absaroka",

            /**
             * The Roblox ID of the group.
             */
            groupId: 8559135,

            /**
             * What rank should be the maximum that can be ranked by your bot? 
            */
            maximumRank: 10,

            /**
             * What rank should be the maximum that can be ranked by your bot? 
            */
            recordManualActions: true,

            /**
             * What rank should users be ranked to when they are fired?
             * @default 1
             */
            firedRank: 2,

            /**
             * What role should users be placed at if they are suspended?
             * @default 1
             */
            suspendedRank: 2,

            /**
             * Should the bot delete URLs in your group wall?
             * @default false
             */
            deleteWallURLs: true,

            /**
            * IDs of roles that have permission to do various things.
            */
            permissions: {
                /**
                 * Access to all commands. Please be careful with this.
                 */
                all: ['1222655511925620776'],
                /**
                 * Access to the promote, demote, setrank, and fire commands.
                 */
                ranking: ['1222969972100169728'],
                /**
                 * Access to the info, add-xp, remove-xp, and xp-rankup commands.
                 */
                users: [],
                /**
                 * Access to the shout command.
                 */
                shout: ['1222969972100169728'],
                /**
                 * Access to the join-requests, accept-join, and deny-join commands.
                 */
                join: [],
                /**
                 * Access to the signal command.
                 */
                signal: [],
                /**
                 * Access to the revert-ranks, exile, groupban, and ungroupban command.
                 */
                admin: []
            },

            memberCount: {
                /**
                 * Is this feature enabled?
                 */
                enabled: false,
                /**
                 * What channel should the member count be announced in when it changes?
                 */
                channelId: "DISCORD_CHANNEL_ID", //
                /**
                 * Multiples of this number will be considered milestones.
                 */
                milestone: 1000,
                /**
                 * Should the bot log member counts that are not milestones?
                 */
                onlyMilestones: true
            },

            /**
             * Configuration for the XP system.
            */
            xpSystem: {
                /**
                 * Should the XP system be enabled?
                 */
                enabled: false,
                /**
                 * Should users be ranked up if they meet requirements after their XP is changed through commands?
                 */
                autoRankup: false,
                /**
                 * Roles that users can rank up to.
                 */
                roles: []
            }
        }
    ],
}

function findGroupById(groupId: number): Promise<any> {
    return new Promise((resolve, reject) => {
        config.groups.forEach(async (group) => {
            if (group.groupId == groupId) resolve(group);
        });

        reject("Group not found. Are you sure it exists?");
    });
}

function findGroupByName(name: String): Promise<any> {
    return new Promise((resolve, reject) => {
        config.groups.forEach(async (group) => {
            if (group.name == name) resolve(group);
        });

        reject("Group not found. Are you sure it exists?");
    });
}

export { config, findGroupById, findGroupByName }
